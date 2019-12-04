import { Component, Input } from '@angular/core';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.less']
})
export class SettingsPanelComponent {
  public selectedColor: string = '#f9d9ab';

  @Input() selectedItem: string;
}
