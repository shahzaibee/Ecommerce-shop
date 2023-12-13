import Categorypage from "../[category]/categoryPage";

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <div className="mb-[100px] mt-[50px] mx-auto">
      <Categorypage params={params} />
    </div>
  );
};

export default Category;
