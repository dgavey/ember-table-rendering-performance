import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {
  
  items = this.generateItems();
  @tracked isShowingTable = false;
  @tracked useInnerEach = false;

  generateItems() {
    const items = [];
    const subItems = [];
    for(let x=0; x<=200; x++){
        subItems.push({row: x, columns: [
        {columnName: "sub one"},
        {columnName: "sub two"},
        {columnName: "sub three"},
        {columnName: "sub four"},
        {columnName: "sub five"},
        {columnName: "sub six"},
        {columnName: "sub seven"},
        {columnName: "sub eight"},
        {columnName: "sub nine"},
      ]
    });
    }

    for(let x=0; x<=200; x++){
        items.push({row: x, columns: [
        {columnName: "one"},
        {columnName: "two"},
        {columnName: "three"},
        {columnName: "four"},
        {columnName: "five"},
        {columnName: "six"},
        {columnName: "seven"},
        {columnName: "eight"},
        {columnName: "nine"},
      ],
      isExpanded: false,
      subItems: subItems
    });
    }
    return items;
  }


  @action showTable() {
    this.isShowingTable = !this.isShowingTable;
  }
}
