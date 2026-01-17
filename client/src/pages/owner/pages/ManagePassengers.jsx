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

const passengersData = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1 234-567-8901",
    bus: "Bus #7",
    route: "Route A",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    phone: "+1 234-567-8902",
    bus: "Bus #3",
    route: "Route B",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Davis",
    phone: "+1 234-567-8903",
    bus: "Bus #12",
    route: "Route C",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Emily Brown",
    phone: "+1 234-567-8904",
    bus: "Bus #5",
    route: "Route D",
    status: "Active",
  },
];

const ManagePassengers = ({ isEmployeePath }) => {
  const [passengers, setPassengers] = useState(passengersData);
  const [page, setPage] = useState(1);

  const resultsPerPage = 7;
  const totalResults = passengers.length;

  const handleDelete = (id) => {
    setPassengers(passengers.filter((d) => d.id !== id));
  };

  const paginatedPassengers = passengers.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  //  const handleStatus = (id) => {
  //   setStatusOf(
  //     passengers.map((passenger) => {
  //       if (passenger.id === id) {
  //         return {
  //           ...passenger,
  //           status: passenger.status === "Active" ? "Inactive" : "Active",
  //         };
  //       }
  //       return passenger;
  //     })
  //   );
  // };

  const handleStatus = (id) => {
    setPassengers((prev) =>
      prev.map((passenger) =>
        passenger.id === id
          ? {
              ...passenger,
              status: passenger.status === "Active" ? "Inactive" : "Active",
            }
          : passenger
      )
    );
  };

  return (
    <div className="antialiased p-10 w-full  h-full min-h-screen  bg-gray-200 dark:bg-gray-700 md:ml-64  pt-20 ">
      {/* Header */}
      <div className="flex justify-between mt-9 mb-5">
        <div>
          <h2 className="text-xl dark:text-gray-300 text-gray-700 font-semibold">
            Manage Passengers
          </h2>
          <p className="text-sm font-light   dark:text-gray-300 text-gray-600">
            View and manage registered passengers
          </p>
        </div>
        {/* <AddDriverModal /> */}
      </div>

      {/* Table */}
      <div className="rounded-lg border  shadow-sm text-gray-600 bg-white dark:bg-gray-600 dark:text-gray-300 dark:border-gray-500 dark:shadow-sm">
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
                User Id
              </TableHead>
              <TableHead className="bg-gray-100 p-2 dark:bg-gray-500 ">
                Route
              </TableHead>
              <TableHead className="bg-gray-100 p-2 dark:bg-gray-500">
                Status
              </TableHead>
              {!isEmployeePath && (
                <TableHead className="bg-gray-100 pe-9 dark:bg-gray-500 rounded-tr-lg text-right">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedPassengers.map((passenger) => (
              <TableRow key={passenger.id} className="hover:bg-muted/60 ">
                <TableCell className="font-medium p-5 ">
                  {passenger.name}
                </TableCell>
                <TableCell>{passenger.phone}</TableCell>
                <TableCell>#00{passenger.id}</TableCell>
                <TableCell>{passenger.route}</TableCell>

                <TableCell>
                  <Badge
                    variant={
                      passenger.status === "Active" ? "default" : "secondary"
                    }
                    //  variant="outline"
                    className={`shadow ${
                      passenger.status === "Active"
                        ? "bg-green-200 text-green-600"
                        : "bg-rose-200 text-red-600"
                    }`}
                  >
                    {passenger.status}
                  </Badge>
                </TableCell>

                {!isEmployeePath && (
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-3">
                      {/* <Button variant="ghost" size="icon" onClick={() => handleStatus(passenger.id)}> */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleStatus(passenger.id)}
                      >
                        {passenger.status === "Active" ? (
                          <Eye className="w-4 h-4" />
                        ) : (
                          <EyeClosed className="w-4 h-4" />
                        )}
                      </Button>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(passenger.id)}
                      >
                        <Trash className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center bg-gray-100  dark:bg-gray-500 rounded-lg justify-between p-4">
          <p className="text-sm">
            Showing <strong>{paginatedPassengers.length}</strong> of{" "}
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
};

export default ManagePassengers;
