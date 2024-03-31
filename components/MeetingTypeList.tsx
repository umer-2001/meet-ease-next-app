"use client";
import Image from "next/image";
import React from "react";
import HomeCards from "./HomeCards";

const MeetingTypeList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <HomeCards
        className="bg-orange-1"
        icon="/assets/icons/add-meeting.svg"
        title="New Meeting"
        desc="Start an instant meeting"
      />
      <HomeCards
        className="bg-blue-1"
        icon="/assets/icons/join-meeting.svg"
        title="Join Meeting"
        desc="Join Meeting"
      />
      <HomeCards
        className="bg-purple-1"
        icon="/assets/icons/schedule.svg"
        title="Schedule Meeting"
        desc="Plan your meeting"
      />
      <HomeCards
        className="bg-yellow-1"
        icon="/assets/icons/recordings.svg"
        title="View Recordings"
        desc="Meeting Recordings"
      />
    </section>
  );
};

export default MeetingTypeList;
