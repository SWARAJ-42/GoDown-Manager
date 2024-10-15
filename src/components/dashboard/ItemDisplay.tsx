"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Item {
  item_id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
  status: string;
  godown_id: string;
  brand: string;
  attributes: {
    [key: string]: any;
  };
  image_url: string;
}

export function ItemDisplay({ item = null }: { item: Item | null }) {
  if (!item) {
    return (
      <Card className="w-full max-w-3xl p-6 flex items-center justify-center">
        <p className="text-muted-foreground">No item selected</p>
      </Card>
    );
  }

  return (
    <Card className="h-full w-full overflow-hidden font-semibold bg-white/40">
      <CardHeader className="p-6">
        <div className="m-auto flex flex-col sm:flex-row justify-center items-center w-full">
          <div className="relative w-full sm:w-[40%] h-48 sm:h-full">
            <img
              src={item.image_url || "/placeholder.svg"}
              alt={item.name}
              // layout="fill"
              // objectFit=""
              className="w-full h-full max-h-[400px] rounded-t-lg sm:rounded-lg"
            />
          </div>
          <div className="p-6 sm:w-[60%]">
            <CardTitle className="text-2xl font-bold mb-2">
              {item.name}
            </CardTitle>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{item.category}</Badge>
              <Badge variant="outline">{item.brand}</Badge>
              <Badge
                variant={item.status === "In Stock" ? "success" : "destructive"}
                // className={`${item.status === "In Stock" ? "bg-green" : "bg-red"}`}
              >
                {item.status}
              </Badge>
            </div>
            <div className="my-3">
              <p className="text-sm text-muted-foreground">ID</p>
              <p className="font-medium">{item.item_id}</p>
            </div>
            <div className="my-3">
              <p className="text-sm text-muted-foreground">Godown ID</p>
              <p className="font-medium">{item.godown_id}</p>
            </div>
            <div className="my-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="font-medium">${item.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Quantity</p>
                <p className="font-medium">{item.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">Attributes</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(item.attributes).map(([key, value]) => (
            <div key={key}>
              <p className="text-sm text-muted-foreground capitalize">
                {key.replace("_", " ")}
              </p>
              <p className="font-medium">{value.toString()}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
