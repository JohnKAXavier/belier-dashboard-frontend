import { Component } from '@angular/core';
import { faChartBar, faContactBook, faHand } from '@fortawesome/free-regular-svg-icons';
import { faDashboard, faLocation, faShop, faBoxes, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;

}
