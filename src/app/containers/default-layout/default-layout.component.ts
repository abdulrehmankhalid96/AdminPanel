import { Component, OnInit } from "@angular/core";
import { navItemsForAdmin, navItemsForClient } from "../../_nav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems;
  ngOnInit(): void {

    let a = localStorage.getItem("role_id");
    if (a == "2") {
      this.navItems = navItemsForAdmin;
    } else {
      this.navItems = navItemsForClient;
    }
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
