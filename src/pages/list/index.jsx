import Card from "./components/Card/Card";
import dummyData from "./data/dummy.json";

const ListPage = () => {
  return (
    <div>
      <p className="font-24-bold">인기 롤링 페이퍼 🔥</p>
      {dummyData.map((data) => {
        return <Card key={data.userId} color={"purple"} data={data} />;
      })}
      {/* <Card color={"purple"} />
      <Card color={"orange"} />
      <Card color={"green"} />
      <Card color={"blue"} />
      <Card color={"custom"} /> */}
    </div>
  );
};

export default ListPage;
