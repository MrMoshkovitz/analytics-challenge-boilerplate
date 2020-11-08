import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import {ByDay} from "../components/Analytics/ByDay"
import {ByHour} from "../components/Analytics/ByHour"
export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}
/* 
Missin :
Retention Component
Logs Component ==> Showing log of all events -
Gmaps Component
Time On URL   => Showing time per url per user
Time On URL For All Users   => Showing time spent on each page by all users.
*/

/* 
1. Maps that Shows All The Geo Locations Points (Cluster from Gmaps API)
2. In The Weekly Retetion Just Like Tha Github (Mix Paner)
3. Event Logs need to be Accordion, Inifinite SCroller *Material UI
4. Pizza Chart


*/
const DashBoard: React.FC = () => {
  return (
    <>
    <ByDay />
    <ByHour />
    </>
  );
};

export default DashBoard;
