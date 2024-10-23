import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// This would typically come from a database
const products = [
  { id: 1, name: "Laptop X1", currentPrice: 999, targetPrice: 899 },
  { id: 2, name: "Smartphone Y2", currentPrice: 699, targetPrice: 649 },
  { id: 3, name: "Headphones Z3", currentPrice: 199, targetPrice: 179 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Dashboard</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Target Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.currentPrice}</TableCell>
                <TableCell>${product.targetPrice}</TableCell>
                <TableCell>
                  <Button asChild variant="outline">
                    <Link href={`/dashboard/product/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
