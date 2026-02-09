import { Input } from "@/components/ui/input";

const ListContainer = () => {
  return (
    <div className="space-y-6 ">
      <Input placeholder="Search..." className="mt-6"></Input>

      <div className="space-y-6">
        <p className="text-lg font-medium">Videos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6 ">
          <div className="p-2 border rounded-md ">
            <div className=" h-24 bg-red-200 rounded-md "></div>
            <div className=" mt-2">
              <p className=" font-medium">video title</p>
              <p className="text-sm line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, mollitia. Praesentium, officiis quis. Illum
                repellendus sunt iusto, soluta culpa provident laborum delectus
                quae quaerat a distinctio excepturi, ratione obcaecati quo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-lg font-medium">Articles</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6 ">
          <div className="p-2 border rounded-md ">
            <div className=" h-24 bg-red-200 rounded-md "></div>
            <div className=" mt-2">
              <p className=" font-medium">video title</p>
              <p className="text-sm line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, mollitia. Praesentium, officiis quis. Illum
                repellendus sunt iusto, soluta culpa provident laborum delectus
                quae quaerat a distinctio excepturi, ratione obcaecati quo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
