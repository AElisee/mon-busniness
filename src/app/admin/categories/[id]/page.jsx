import Service from "@/app/ui/admin/service/Service.jsx";
import { categorieItems } from "@/lib/utils.js";

const Servies = ({ params }) => {
  const { id } = params;

  const cat = categorieItems.find((item) => item.id === parseInt(id));

  return (
    <div className="">
      <h3 className="text-2xl p-3 capitalize font-bold text-textPrimary">
        {cat.name}
      </h3>
      <div className="p-3 bg-bgSecondary rounded-lg">
        <Service cat={cat}/>
      </div>
    </div>
  );
};

export default Servies;
