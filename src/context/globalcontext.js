import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: 0,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });
  const [user, setUser] = useState({
    email: "",
    name: "",
    image: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "job_description") {
      setInput({ ...input, job_description: value });
    } else if (name === "job_qualification") {
      setInput({ ...input, job_qualification: value });
    } else if (name === "job_type") {
      setInput({ ...input, job_type: value });
    } else if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value });
    } else if (name === "job_status") {
      setInput({ ...input, job_status: value });
    } else if (name === "company_name") {
      setInput({ ...input, company_name: value });
    } else if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value });
    } else if (name === "company_city") {
      setInput({ ...input, company_city: value });
    } else if (name === "salary_min") {
      setInput({ ...input, salary_min: value });
    } else if (name === "salary_max") {
      setInput({ ...input, salary_max: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { title } = input;
    let { job_description } = input;
    let { job_qualification } = input;
    let { job_type } = input;
    let { job_tenure } = input;
    let { job_status } = input;
    let { company_name } = input;
    let { company_image_url } = input;
    let { company_city } = input;
    let { salary_min } = input;
    let { salary_max } = input;



    setInput({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
    setCurrentId(-1);
  };

  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    user,
    setUser,
  };

  let handleFunction = {
    // handleDelete,
    // handleEdit,
    // handleSubmit,
    // handleChange,
    // fetchData,
    // handleRupiah,
    // handleLogout,
    // handleText
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
