import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.less']
})
export class SettingsPanelComponent implements OnInit {

  @Input() selectedItem: string;
  
  constructor() { }

  ngOnInit() {
  }

}
