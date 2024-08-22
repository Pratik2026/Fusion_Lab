"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const modules = [
    "Academics Module",
    "Programme And Curriculum Module",
    "Central Mess",
    "Visitor's Hostel",
    "Library Module",
    "Research Module",
    "Sports Facilities",
  ];

  const SidebarContent = () => (
    <div className="p-4 flex flex-col justify-between items-center h-full">
      <div>
        <h2 className="text-lg font-semibold mb-4">PROFESSIONAL DASHBOARD</h2>
        <Card className="w-64 bg-white p-4 ">
          <CardContent className="flex flex-col items-center p-6">
            <Avatar className="max-w-24 max-h-24 mb-4">
              <AvatarFallback className="bg-gray-200 text-gray-500 text-2xl font-semibold">
                P
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-center mb-1">
              Pratik Solanki
            </h2>
            <p className="text-sm text-gray-600 mb-1">CSE - 22BCS195</p>
            <p className="text-sm text-gray-600 mb-1">B.Tech 2022 Sem - 5</p>
            <p className="text-sm text-gray-600">Student</p>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 flex flex-col gap-4 items-center">
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-500 mb-2">
            COMPOUNDER
          </h3>
          <p className="text-lg font-semibold">Prakash Kumar</p>
          <p className="text-sm text-gray-600">Student Affairs</p>
        </div>
        <Button variant="destructive" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Hamburger menu for mobile */}
      <div className="lg:hidden">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild className="inline">
            <Button variant="outline" size="icon" className=" ml-4 mt-4">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-white">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:block w-72 bg-white border-r">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="p-4 lg:p-8 h-full flex flex-col">
          {/* Top Navigation - Scrollable */}
          <ScrollArea className="w-full whitespace-nowrap rounded-md mb-8">
            <div className="flex w-max space-x-4">
              {modules.map((item) => (
                <Card key={item} className="w-48 lg:w-64 shrink-0 text-center">
                  <CardHeader className="p-4">
                    <CardTitle className="text-xs lg:text-sm font-medium">
                      {item}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          {/* Tabs */}
          <Tabs
            defaultValue="notifications"
            className="flex-1 overflow-hidden flex flex-col"
          >
            <TabsList>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="notifications" className="flex-1 overflow-auto">
              {/* Notification Cards */}
              {[
                {
                  title: "Healthcare Center",
                  date: "3 months, 4 weeks ago",
                  content:
                    "You have a new medical forward relief request - by Prof. Atul Gupta",
                  read: false,
                },
                {
                  title: "Healthcare Center",
                  date: "3 months, 4 weeks ago",
                  content: "New PHC Doctor",
                  read: true,
                },
                {
                  title: "Healthcare Center",
                  date: "3 months, 4 weeks ago",
                  content:
                    "You have a new medical forward relief request - by Prof. Atul Gupta",
                  read: false,
                },
              ].map((notification, index) => (
                <Card
                  key={index}
                  className={`mb-4 ${
                    notification.read ? "border-blue-200" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-500 mb-1">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {notification.date}
                    </p>
                    <p className="mb-4">{notification.content}</p>
                    {notification.read ? (
                      <Button variant="secondary" className="w-full">
                        Mark as Read
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        Mark as Unread
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
