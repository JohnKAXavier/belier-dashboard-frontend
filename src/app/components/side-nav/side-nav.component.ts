import { Component } from '@angular/core';
import { faChartBar, faContactBook, faHand } from '@fortawesome/free-regular-svg-icons';
import { faDashboard, faLocation, faShop, faBox, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
}
