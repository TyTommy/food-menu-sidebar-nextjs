import Card from "@/components/card/page";
import MainCard from "@/components/mainCard/page";
import Nav from "@/components/nav/page";
import Sider from "@/components/sider/page";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  const recipes = data.recipes.slice(0, 4);

  return (
    <>
      <div className="flex gap-5 w-full min-h-screen bg-[#E6E3E3]">
        <Sider />
        <div className="w-[85%]">
          <Nav />
          <MainCard />
          <br />
          <br />
          <div className="card-wrapper flex items-center justify-center gap-10 w-full h-[380px]">
            {recipes.map((recipe) => (
              <Card key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
