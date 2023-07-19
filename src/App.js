import * as React from "react";
import {
  GanttComponent,
  Inject,
  Selection,
  ColumnsDirective,
  ColumnDirective,
  Toolbar, ToolbarItem, Edit, EditSettingsModel
} from "@syncfusion/ej2-react-gantt";
import { projectNewData } from "./data";
function Default() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  };
  const editOptions = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true
};
const toolbarOptions = ['Add','Edit','Delete','Cancel','Update','PrevTimeSpan','NextTimeSpan','ExpandAll','CollapseAll','Search','Indent','Outdent'];
  // const projectStartDate = new Date("03/24/2019");
  // const projectEndDate = new Date("07/06/2019");
  return (
    <div className="control-pane">
      <div className="control-section">
        <GanttComponent
          id="Default"
          dataSource={projectNewData}
          height="100vh"
          style={{height: "100vh"}}
          taskFields={taskFields}
          // enableImmutableMode={true}
          // treeColumnIndex={1}
          // labelSettings={labelSettings}
          // projectStartDate={projectStartDate}
          // projectEndDate={projectEndDate}
          editSettings={editOptions} toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" width="80"></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Job Name"
              width="300"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
            <ColumnDirective field="StartDate" format="dd-MMM-yyyy"></ColumnDirective>
            <ColumnDirective field="Duration"></ColumnDirective>
            <ColumnDirective field="Progress"></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, Toolbar, Edit]} />
        </GanttComponent>
      </div>
    </div>
  );
}
export default Default;
