import { useContext } from "react";
import "../App.css";
import SubmitForm from "./FormSubmit/SubmitForm";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import UserContext from "../ContextApi/user-context";


export default function FormPage() {
//   const [usersInput, setUsersInput] = useState([]);
    const usersInput = useContext(UserContext)
    console.log('I am context : ', usersInput.userInputs);

  const fromSubmitHandler = (userValues) => {
    const userInput = {
      ...userValues,
      id: usersInput.userInputs.length,
    };
    // setUsersInput([...usersInput, userInput]);
    usersInput.addUser(userInput)
    // console.log(usersInput);
  };

//   console.log({ usersInput });


  return (
    <div>
      <SubmitForm userInput={fromSubmitHandler} />
      {console.log(usersInput.userInputs.length)}
      <div className="userInputContainer">
        {usersInput.userInputs?.map((item) => (
          <Card key={item.id} item={item} handleDelete={() => usersInput.deleteUser(item.id)} />
        ))}
      </div>
      {usersInput.userInputs.length !== 0 && <div>
        <Link to='/generate-img'>
            <button className="generate-submit-btn">Generate Image</button>
        </Link>
      </div>}
    </div>
  );
}

