import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

import { Search } from "lucide-react";
import { Button } from "react-day-picker";

export function OrderTableSkeleton() {
  return Array.from({
    length: 10,
  }).map((_, i) => {
    return (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <TableRow key={i}>
        <TableCell>
          <Skeleton className="h-4 w-4" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[172px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[148px]" />
        </TableCell>
        <TableCell className="">
          <Skeleton className="h-4 w-[110px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[200px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[64px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[92px]" />
        </TableCell>
      </TableRow>
    );
  });
}
