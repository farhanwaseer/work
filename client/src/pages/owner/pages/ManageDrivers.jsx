import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Eye, EyeClosed, Trash } from "lucide-react";
import AddDriverModal from "@/components/Models/AddDriver"; // your modal component

const driversData = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1 234-567-8901",
    bus: "Bus #1",
    route: "Route A",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    phone: "+1 234-567-8902",
    bus: "Bus #2",
    route: "Route B",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Davis",
    phone: "+1 234-567-8903",
    bus: "Bus #3",
    route: "Route C",
    status: "Off Duty",
  },
  {
    id: 4,
    name: "Emily Brown",
    phone: "+1 234-567-8904",
    bus: "Bus #4",
    route: "Route D",
    status: "Active",
  },
];

export default function ManageDrivers({ isEmployeePath }) {
  const [drivers, setDrivers] = useState(driversData);
  const [page, setPage] = useState(1);

  const resultsPerPage = 7;
  const totalResults = drivers.length;

  const handleDelete = (id) => {
    setDrivers(drivers.filter((d) => d.id !== id));
  };

  const paginatedDrivers = drivers.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  const handleStatus = (id) => {
    setDrivers((prev) =>
      prev.map((driver) =>
        driver.id === id
          ? {
              ...driver,
              status: driver.status === "Active" ? "Off Duty" : "Active",
            }
          : driver
      )
    );
  };

  return (
    // <div className="p-6 mt-10 max-w-5xl mx-auto ">
    <div className="antialiased p-10 w-full  h-full min-h-screen  bg-gray-200 dark:bg-gray-700 md:ml-64  pt-20 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 mt-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Manage Drivers
          </h2>
          <p className="text-sm font-light text-gray-600 dark:text-gray-300">
            Real-time transportation management insights
          </p>
        </div>
        {!isEmployeePath && (
          <div>
            <AddDriverModal />
          </div>
        )}
      </div>

      {/* Table */}
      <div className="rounded-lg border shadow-sm text-gray-600 bg-white dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500 dark:shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-gray-100  p-4 dark:bg-gray-500 rounded-ss-lg">
                Name
              </TableHead>
              <TableHead className="bg-gray-100 p-4 dark:bg-gray-500">
                Phone
              </TableHead>
              <TableHead className="bg-gray-100 p-2 dark:bg-gray-500 ">
                Assigned Bus
              </TableHead>
              <TableHead className="bg-gray-100 p-4 dark:bg-gray-500 ">
                Route
              </TableHead>
              <TableHead className="bg-gray-100 p-4 dark:bg-gray-500">
                Status
              </TableHead>
             {!isEmployeePath && <TableHead className="bg-gray-100 p-4 dark:bg-gray-500 rounded-tr-lg text-right">
                Actions
              </TableHead>}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedDrivers.map((driver) => (
              <TableRow key={driver.id} className="hover:bg-muted/60 ">
                <TableCell className="font-medium p-5 ">
                  {driver.name}
                </TableCell>
                <TableCell>{driver.phone}</TableCell>
                <TableCell>{driver.bus}</TableCell>
                <TableCell>{driver.route}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      driver.status === "Active" ? "default" : "secondary"
                    }
                    //  variant="outline"
                    className={`shadow ${
                      driver.status === "Active"
                        ? "bg-green-200 text-green-600"
                        : "bg-rose-200 text-red-600"
                    }`}
                  >
                    {driver.status}
                  </Badge>
                </TableCell>

            {!isEmployeePath && <TableCell className="text-right">
              <div className="flex justify-end space-x-3">
                {/* <Button variant="ghost" size="icon" onClick={() => handleStatus(passenger.id)}> */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleStatus(driver.id)}
                >
                  {driver.status === "Active" ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeClosed className="w-4 h-4" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(driver.id)}
                >
                  <Trash className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center bg-gray-100  dark:bg-gray-500 rounded-lg justify-between p-4">
          <p className="text-sm">
            Showing <strong>{paginatedDrivers.length}</strong> of{" "}
            <strong>{totalResults}</strong>
          </p>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              disabled={page * resultsPerPage >= totalResults}
              onClick={() => setPage(page + 1)}
              // onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Example() {
  return (
    <div className="w-full flex justify-end items-center gap-2 text-gray-500 font-medium">
      <button type="button" aria-label="prev" className="rounded-full">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
            fill="#475569"
            stroke="#475569"
            strokeWidth=".078"
          />
        </svg>
      </button>

      <button className="h-10 w-10 flex items-center justify-center text-indigo-500 border border-indigo-200 rounded-full">
        3
      </button>

      <button type="button" aria-label="next" className="rounded-full">
        <svg
          className="rotate-180"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z"
            fill="#475569"
            stroke="#475569"
            strokeWidth=".078"
          />
        </svg>
      </button>
    </div>
  );
}
