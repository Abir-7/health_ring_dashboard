"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { PaymentData } from "@/types/res/revenue";

import { CircleCheckBigIcon, CircleX, Clock } from "lucide-react";

interface RevenueTableProps {
  data: PaymentData[];
}

const RevenueTable = ({ data }: RevenueTableProps) => {
  return (
    <div className="rounded-md border">
      <div className="p-4 text-xl">
        <h1>Recent Transactions</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 ">
            <TableHead className="text-user-filter-option px-4">
              Transaction ID
            </TableHead>
            <TableHead className="text-user-filter-option px-4 ">
              User
            </TableHead>
            <TableHead className="text-user-filter-option px-4">Plan</TableHead>
            <TableHead className="text-user-filter-option px-4">
              Method
            </TableHead>
            <TableHead className="text-user-filter-option px-4">
              Status
            </TableHead>
            <TableHead className=" text-user-filter-option px-4">
              Amount
            </TableHead>
            <TableHead className="text-user-filter-option px-4">Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="">
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center text-muted-foreground"
              >
                No revenue data found
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.trx_id}>
                <TableCell className="font-mono text-sm px-4">
                  {item.trx_id}
                </TableCell>
                <TableCell className="px-4">{item.user}</TableCell>
                <TableCell className="text-user-filter-option px-4">
                  {item.plan}
                </TableCell>
                <TableCell className="px-4">{item.method}</TableCell>
                <TableCell className="px-4">
                  <div className="max-w-32">
                    <span
                      className={`capitalize  flex items-center gap-2 font-medium px-3 py-1 rounded-md ${
                        item.status === "complete"
                          ? "text-green-600 bg-green-100"
                          : item.status === "pending"
                            ? "text-yellow-600 bg-yellow-50"
                            : "text-red-600 bg-red-100"
                      }`}
                    >
                      {item.status === "complete" ? (
                        <CircleCheckBigIcon size={16} />
                      ) : item.status === "pending" ? (
                        <Clock size={16} />
                      ) : (
                        <CircleX size={16} />
                      )}{" "}
                      {item.status}
                    </span>
                  </div>
                </TableCell>
                <TableCell className=" font-semibold px-4">
                  ${item.amount.toFixed(2)}
                </TableCell>
                <TableCell className="px-4">
                  {new Date(item.date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RevenueTable;
