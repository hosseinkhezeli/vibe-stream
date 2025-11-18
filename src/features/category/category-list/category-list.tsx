import { Chip } from "@/core/ui/chip/chip";
import { categories } from "../category";

export function CategoryList() {
  return (
    <ul className="flex gap-1 my-4">
      {categories.map((category, idx) => (
        <li key={category.id}>
          <Chip label={category.label} activated={idx === 0} />
        </li>
      ))}
    </ul>
  );
}
