import React from "react";
import { Plus, Pencil, MapPin } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// export default function ManageRoutes() {
//   const [open, setOpen] = React.useState(false);

//   const routes = [
//     { name: "Route A", bus: "Bus #7", stops: 12, distance: "15 km", status: "Active" },
//     { name: "Route B", bus: "Bus #3", stops: 8, distance: "10 km", status: "Active" },
//     { name: "Route C", bus: "Bus #12", stops: 15, distance: "20 km", status: "Active" },
//   ];

//   return (
//     <div className="p-6 space-y-4">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-light">Manage Routes & Buses</h2>
//           <p className="text-sm text-gray-600">
//             Configure routes and assign buses
//           </p>
//         </div>

//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button className="flex gap-2 text-sm">
//               <Plus size={18} /> Add Route
//             </Button>
//           </DialogTrigger>

//           {/* Modal */}
//           <DialogContent className="max-w-md">
//             <DialogHeader>
//               <DialogTitle>Add New Route</DialogTitle>
//             </DialogHeader>

//             <div className="space-y-3 mt-3">
//               <div>
//                 <label className="text-sm">Route Name</label>
//                 <Input placeholder="Enter route name" className="mt-1" />
//               </div>

//               <div>
//                 <label className="text-sm">Assign Bus</label>
//                 <Select>
//                   <SelectTrigger className="mt-1">
//                     <SelectValue placeholder="Select bus" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="1">Bus #1</SelectItem>
//                     <SelectItem value="7">Bus #7</SelectItem>
//                     <SelectItem value="12">Bus #12</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="text-sm">Stops</label>
//                 <Input type="number" placeholder="Enter stops count" className="mt-1" />
//               </div>

//               <div>
//                 <label className="text-sm">Distance (km)</label>
//                 <Input type="number" placeholder="Enter distance" className="mt-1" />
//               </div>
//             </div>

//             <DialogFooter>
//               <Button variant="outline" onClick={() => setOpen(false)}>
//                 Cancel
//               </Button>
//               <Button>Add Route</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Body Layout */}
//       <div className="flex gap-6 mt-4">
//         {/* Left Table */}
//         <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow w-2/3">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-base text-gray-600">Routes List</h3>
//           </div>

//           <table className="w-full text-sm font-light">
//             <thead>
//               <tr className="border-b font-light text-gray-600 dark:text-gray-300 dark:border-gray-700 text-left">
//                 <th className="py-2">Route Name</th>
//                 <th>Assigned Bus</th>
//                 <th>Stops</th>
//                 <th>Distance</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {routes.map((r, i) => (
//                 <tr key={i} className="border-b dark:border-gray-700">
//                   <td className="py-3 px-2">{r.name}</td>
//                   <td className="py-3 px-4">{r.bus}</td>
//                   <td className="py-3 px-4">{r.stops}</td>
//                   <td className="py-3 px-4">{r.distance}</td>
//                   <td className="py-3 px-4">
//                     <span className="text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded text-xs">
//                       {r.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4 flex gap-3">
//                     <Pencil
//                       size={16}
//                       className="cursor-pointer text-gray-600 hover:text-blue-600"
//                     />
//                     <MapPin
//                       size={16}
//                       className="cursor-pointer text-gray-600 hover:text-red-600"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Map Preview */}
//         <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow w-1/3">
//           <h3 className="text-sm font-semibold text-gray-600 mb-3">
//             Route Map Preview
//           </h3>

//           <div className="bg-blue-50 dark:bg-gray-900 rounded-lg h-64 flex items-center justify-center relative">
//             <div className="absolute top-6 left-10 w-3 h-3 bg-red-500 rounded-full" />
//             <div className="absolute bottom-10 left-20 w-3 h-3 bg-blue-500 rounded-full" />
//             <div className="absolute top-12 right-16 w-3 h-3 bg-blue-500 rounded-full" />

//             <div className="flex flex-col text-base items-center text-center text-gray-600">
//               <MapPin size={30} className="text-blue-600 mb-4" />
//               <span>Select a route to view map</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ManageRoutes() {
  const [open, setOpen] = React.useState(false);

  const routes = [
    {
      name: "Route A",
      bus: "Bus #7",
      stops: 12,
      distance: "15 km",
      status: "Active",
    },
    {
      name: "Route B",
      bus: "Bus #3",
      stops: 8,
      distance: "10 km",
      status: "Active",
    },
    {
      name: "Route C",
      bus: "Bus #12",
      stops: 15,
      distance: "20 km",
      status: "Active",
    },
  ];

  return (
    <div
      className="
        pl-64      /* pushes content right (for sidebar) */
        pt-20      /* pushes content down (for navbar) */
        pr-6 
        pb-6 
        min-h-screen
        w-full
        bg-gray-200 dark:bg-gray-700
      "
    >
      <div className="p-9 space-y-4 bg-transparent">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl  dark:text-gray-300 ">
              Manage Routes & Buses
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Configure routes and assign buses
            </p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="flex gap-2 p-6 text-sm">
                <Plus size={18} /> Add Route
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-md p-6 sm:p-8">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  Add New Route
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Route Name</label>
                  <Input placeholder="Enter route name" />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Assign Bus</label>
                  <Select className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select bus" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Bus #1</SelectItem>
                      <SelectItem value="7">Bus #7</SelectItem>
                      <SelectItem value="12">Bus #12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Stops</label>
                  <Input type="number" placeholder="Enter stops count" />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Distance (km)
                  </label>
                  <Input type="number" placeholder="Enter distance" />
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="mr-2 dark:text-gray-300"
                >
                  Cancel
                </Button>
                <Button>Add Route</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Body Layout */}
        <div className="flex gap-6 mt-4">
          {/* Left Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base text-gray-600 dark:text-gray-400">
                Routes List
              </h3>
            </div>

            <table className="w-full text-sm font-light">
              <thead>
                <tr className="border-b font-light text-gray-600 dark:text-gray-300 dark:border-gray-700 text-left">
                  <th className="py-2">Route Name</th>
                  <th>Assigned Bus</th>
                  <th>Stops</th>
                  <th>Distance</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {routes.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b text-gray-600 dark:text-gray-300 dark:border-gray-700"
                  >
                    <td className="py-3 px-2">{r.name}</td>
                    <td className="py-3 px-4">{r.bus}</td>
                    <td className="py-3 px-4">{r.stops}</td>
                    <td className="py-3 px-4">{r.distance}</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded text-xs">
                        {r.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex gap-3">
                      <Pencil
                        size={16}
                        className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600"
                      />
                      <MapPin
                        size={16}
                        className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-red-600"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Map Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow w-1/3">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
              Route Map Preview
            </h3>

            <div className="bg-blue-50 dark:bg-gray-900 rounded-lg h-64 flex items-center justify-center relative">
              <div className="absolute top-6 left-10 w-3 h-3 bg-red-500 rounded-full" />
              <div className="absolute bottom-10 left-20 w-3 h-3 bg-blue-500 rounded-full" />
              <div className="absolute top-12 right-16 w-3 h-3 bg-blue-500 rounded-full" />

              <div className="flex flex-col text-base items-center text-center text-gray-600 dark:text-gray-300">
                <MapPin size={30} className="text-blue-600 mb-4" />
                <span>Select a route to view map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
