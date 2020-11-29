import * as React from "react";

import { Agenda } from "@microsoft/mgt-react";

import { IMgtEventsProps } from "./IMgtEventsProps";
import { Event } from "./MgtEvent";

//
export const MgtEvents: React.FunctionComponent<IMgtEventsProps> = (
  props: React.PropsWithChildren<IMgtEventsProps>
) => {

  return (
    <>
          <Agenda days={30}>
            <Event template="event"  />
          </Agenda>
    </>
  );
};
