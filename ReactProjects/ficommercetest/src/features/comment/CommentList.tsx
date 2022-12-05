import { useAppSelector } from "../../app/store/configureStore";
import React from 'react';
import DataGrid, {
  Column, FilterRow, HeaderFilter, SearchPanel,
} from 'devextreme-react/data-grid';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';

interface Props {
  comments: Comment[];
}

export default function CommentList({ comments }: Props) {
  const { commentsLoaded } = useAppSelector((state) => state.catalog);

  return (
  <>
    <DataGrid id="gridContainer"
        //   ref={(ref) => { this.dataGrid = ref; }}
          dataSource={comments}
          keyExpr="Id"
          showBorders={true}>
          <FilterRow visible={this.state.showFilterRow}
            applyFilter={this.state.currentFilter} />
          <HeaderFilter visible={this.state.showHeaderFilter} />
          <SearchPanel visible={true}
            width={240}
            placeholder="Search..." />
          <Column dataField="OrderNumber"
            width={140}
            caption="Invoice Number">
            <HeaderFilter groupInterval={10000} />
          </Column>
          <Column dataField="OrderDate"
            alignment="right"
            dataType="date"
            width={120}
            calculateFilterExpression={this.calculateFilterExpression}>
            <HeaderFilter dataSource={this.orderHeaderFilter} />
          </Column>
          <Column dataField="DeliveryDate"
            alignment="right"
            dataType="datetime"
            format="M/d/yyyy, HH:mm"
            width={180} />
          <Column dataField="SaleAmount"
            alignment="right"
            dataType="number"
            format="currency"
            editorOptions={saleAmountEditorOptions}>
            <HeaderFilter dataSource={this.saleAmountHeaderFilter} />
          </Column>
          <Column dataField="Employee" />
          <Column dataField="CustomerStoreCity"
            caption="City">
            <HeaderFilter allowSearch={true} />
          </Column>
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Apply Filter </span>
            <SelectBox items={this.applyFilterTypes}
              value={this.state.currentFilter}
              onValueChanged={this.onCurrentFilterChanged}
              valueExpr="key"
              displayExpr="name"
              disabled={!this.state.showFilterRow} />
          </div>
          <div className="option">
            <CheckBox text="Filter Row"
              value={this.state.showFilterRow}
              onValueChanged={this.onShowFilterRowChanged} />
          </div>
          <div className="option">
            <CheckBox text="Header Filter"
              value={this.state.showHeaderFilter}
              onValueChanged={this.onShowHeaderFilterChanged} />
          </div>
        </div>
      </div>
  </>
  );
}
