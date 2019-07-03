
import {mainEntryToDom} from "./mainEntryToDom.js"
import {welcomeComponent} from "./welcome/welcomeComponent.js"
import { createNav, createDashboard } from "./mainComponent.js";

// mainEntryToDom(welcomeComponent())
mainEntryToDom(createNav(), createDashboard())
