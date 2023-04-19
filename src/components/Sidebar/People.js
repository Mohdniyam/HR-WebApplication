import react from "react";
import { useEffect, useState, useContext } from "react";
import NewCard from "../UI/Card/NewCard";
import { DataInfo } from "../GlobalContext/GlobalContext";

import Wrapper from "../UI/Wrapper/Wrapper";
import Basiclayout from "../layout/basiclayout";

export default function People(props) {
  const { data  } = useContext(DataInfo);
// console.log(typeof x)
  const [UserData] = data;

  console.log(DataInfo);

  let [search, setSearch] = useState("");

  useEffect(() => {
    console.log("search value ", search);
  }, [search]);

  return (
    <Basiclayout>
      <div>
        <div>
          <h1 className="sub_heading">{UserData.length} people</h1>
          <input
            className="PeopleInput"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="search Card"
          />
        </div>
        <Wrapper>
          {UserData?.filter((val, ind) => {
            return val?.name?.toLowerCase()?.includes(search?.toLowerCase());
          })?.map((x) => {
            console.log(x?.file)
            return <NewCard img={x?.file} name={x?.name} gender={x?.leave} />;
          })}
        </Wrapper>
      </div>
    </Basiclayout>
  );
}
