import { Component } from '@angular/core';
import { customer } from '../../customer.model';
import { DisplayModesEnum } from '../display-modes.enum';
import { CustomersService } from '../customer-page/customers.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  displayMode: DisplayModesEnum = DisplayModesEnum.table;
  DisplayModes = DisplayModesEnum;
  searchFirst: string;
  searchLast: string;
  searchPhone: string;
  searchEmail: string;
  customer: customer[];
  currentCustomer: customer;


  constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customer = data;
    });
  }

  filterCustomer(customer) {
    return (
      NotMatch(this.searchFirst, customer.first) ||
      NotMatch(this.searchLast, customer.last) ||
      NotMatch(this.searchPhone, customer.phone) ||
      NotMatch(this.searchEmail, customer.email)
    );

    function NotMatch(
      textFromFilerTextBox: string,
      dataFromCustomerObject: string
    ) {
      return (
        textFromFilerTextBox &&
        dataFromCustomerObject.indexOf(textFromFilerTextBox) == -1
      );
    }
  }
 


}
