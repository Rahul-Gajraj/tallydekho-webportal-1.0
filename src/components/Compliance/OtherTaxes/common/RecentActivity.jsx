import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

const RECENT_ACTIVITIES = [
  { activity: "14 INRs Generated", date: "10 Jul 14:42" },
  { activity: "9 INRs Retry (Success 8)", date: "10 Jul 14:42" },
  { activity: "9 INRs Modified (Success 3, Failed 6)", date: "10 Jul 14:42" },
];

const RecentActivity = ({ isLoading }) => {

  return (
    <Card className="shadow-sm border border-gray-200 !rounded-lg h-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="p-0 flex gap-6 flex-wrap items-center justify-between"
      >
        <Typography variant="h6">Recent Activity</Typography>
      </CardHeader>
      <CardBody className="px-0 py-1 m-2">
        {isLoading ? (
          <List className="pt-0 gap-4">
            {[...Array(3)].map((_, idx) => (
              <Card
                key={idx}
                className="transition-all animate-pulse w-full h-[41px] shadow-none bg-[#E1E6EA]"
              >
                <div></div>
              </Card>
            ))}
          </List>
        ) : RECENT_ACTIVITIES.length > 0 ? (
          <List className="pt-0 gap-4">
            {RECENT_ACTIVITIES.map(({ ledger, activity, date }, idx) => (
              <Card key={idx} className="border shadow-none">
                <ListItem className="hover:!bg-[#eaf8f4] hover:border hover:!border-[#108f6f] focus:border focus:!bg-[#eaf8f4] focus:!border-[#108f6f] block">
                  <div className="flex justify-between">
                    <Typography className="text-[14px]">{activity}</Typography>
                    <Typography className="text-[14px]">{date}</Typography>
                  </div>
                  {/* <Typography className="text-[12px]">{activity}</Typography> */}
                </ListItem>
              </Card>
            ))}
          </List>
        ) : (
          <div className="flex flex-col justify-center items-center h-[350px] gap-2 bg-[#F6F7F9]">
            <img
              src="/media/icons/line_graph.svg"
              alt="line_graph"
              className="h-5 w-5"
            />
            <Typography className="!text-[#6f7c97]">
              No Recent Activity
            </Typography>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default RecentActivity;
