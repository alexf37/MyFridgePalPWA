export type GlobalState = {
  myPantry: PantryItem[];
};

export type PantryItem = {
  id: number;
  name: string;
  daysLeft: number;
  img: string;
  type: "Ingredient" | "Leftover";
  forSale: boolean;
};
