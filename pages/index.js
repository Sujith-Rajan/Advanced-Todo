import Head from "next/head";
import Layout from "../component/Layout";
import { useDispatch } from "react-redux";
import { addTodo,resetTodo} from "../redux/todoSlice";
import axios from "axios";

export default function Home() {
 
    return (
        <div>
            <Head>
                <title>Todo</title>
                <meta name="description" content="Create Todo app" />
                <link rel="icon" href="" />
            </Head>
            <Layout />
        </div>
    );
}


