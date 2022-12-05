import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { MetaData } from "../../app/models/pagination";
import { Comment, CommentParams } from "../../app/models/comment";
import { RootState } from "../../app/store/configureStore";

interface CommentState {
    commentsLoaded: boolean;
    status: string;
    brands: string[];
    types: string[];
    commentParams: CommentParams;
    metaData: MetaData | null;
}

const commentsAdapter = createEntityAdapter<Comment>();

function getAxiosParams(commentParams: CommentParams) {
    const params = new URLSearchParams();
    params.append('pageNumber', commentParams.pageNumber.toString());
    params.append('pageSize', commentParams.pageSize.toString());
    params.append('orderBy', commentParams.orderBy);
    if (commentParams.searchTerm) params.append('searchTerm', commentParams.searchTerm);
    if (commentParams.brands.length > 0) params.append('brands', commentParams.brands.toString());
    if (commentParams.types.length > 0) params.append('types', commentParams.types.toString());
    return params;
}

export const fetchCommentsAsync = createAsyncThunk<Comment[], void, {state: RootState}>(
    'catalog/fetchCommentsAsync',
    async (_, thunkAPI) => {
        const params = getAxiosParams(thunkAPI.getState().catalog.commentParams);
        try {
            const response = await agent.Catalog.list(params);
            thunkAPI.dispatch(setMetaData(response.metaData));
            return response.items;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

export const fetchCommentAsync = createAsyncThunk<Comment, number>(
    'catalog/fetchCommentAsync',
    async (commentId, thunkAPI) => {
        try {
            return await agent.Catalog.details(commentId);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

export const fetchFilters = createAsyncThunk(
    'catalog/fetchFilters',
    async (_, thunkAPI) => {
        try {
            return agent.Catalog.fetchFilters();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

function initParams() {
    return {
        pageNumber: 1,
        pageSize: 6,
        orderBy: 'name',
        brands: [],
        types: []
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: commentsAdapter.getInitialState<CatalogState>({
        commentsLoaded: false,
        filtersLoaded: false,
        status: 'idle',
        brands: [],
        types: [],
        commentParams: initParams(),
        metaData: null
    }),
    reducers: {
        setCommentParams: (state, action) => {
            state.commentsLoaded = false;
            state.commentParams = {...state.commentParams, ...action.payload, pageNumber: 1};
        },
        setPageNumber: (state, action) => {
            state.commentsLoaded = false;
            state.commentParams = {...state.commentParams, ...action.payload};
        },
        setMetaData: (state, action) => {
            state.metaData = action.payload;
        },
        resetCommentParams: (state) => {
            state.commentParams = initParams();
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchCommentsAsync.pending, (state) => {
            state.status = 'pendingFetchComments';
        });
        builder.addCase(fetchCommentsAsync.fulfilled, (state, action) => {
            commentsAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.commentsLoaded = true;
        });
        builder.addCase(fetchCommentsAsync.rejected, (state, action) => {
            console.log(action.payload);
            state.status = 'idle';
        });
        builder.addCase(fetchCommentAsync.pending, (state) => {
            state.status = 'pendingFetchComment';
        });
        builder.addCase(fetchCommentAsync.fulfilled, (state, action) => {
            commentsAdapter.upsertOne(state, action.payload);
            state.status = 'idle';
        });
        builder.addCase(fetchCommentAsync.rejected, (state, action) => {
            console.log(action);
            state.status = 'idle';
        });
        builder.addCase(fetchFilters.pending, (state) => {
            state.status = 'pendingFetchFilters';
        });
        builder.addCase(fetchFilters.fulfilled, (state, action) => {
            state.brands = action.payload.brands;
            state.types = action.payload.types;
            state.filtersLoaded = true;
            state.status = 'idle';
        });
        builder.addCase(fetchFilters.rejected, (state, action) => {
            state.status = 'idle';
            console.log(action.payload);
        })
    })
})

export const commentSelectors = commentsAdapter.getSelectors((state: RootState) => state.catalog);

export const {setCommentParams, resetCommentParams, setMetaData, setPageNumber} = catalogSlice.actions;