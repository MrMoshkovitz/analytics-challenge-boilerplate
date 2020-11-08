import React from "react";
import { Interpreter } from "xstate";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import {ByDay} from "../components/Analytics/ByDay"
import {ByHour} from "../components/Analytics/ByHour"
export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const DashBoard: React.FC = () => {
  return (
    <>
    <ByDay />
    <ByHour />
    </>
  );
};

export default DashBoard;
