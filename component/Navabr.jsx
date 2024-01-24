import React, { useDebugValue, useEffect, useState } from "react";
import styles from "../styles/navbar.module.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import axios from "axios";

const Navabr = () => {
    const [userlist, setUserlist] = useState([]);
    const fetchAllData = async () => {
        try {
            const userSearch = await axios.get("http://localhost:3000/api/user");
            setUserlist(userSearch.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleFocus = () => {
        fetchAllData();
    };
    const handleBlur = () => {
        setUserlist([]);
        console.log("unlist");
    };

    const d = new Date();
    const options = { timeZone: "IST", hour12: true, minute: "numeric", hour: "numeric" };
    const time = d.toLocaleTimeString("en-US", options);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.log}>ToDo</h1>

                <div className={styles.search}>
                    <FiSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Serach"
                        className={styles.searchInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    {userlist.map((user, index) => (
                        <ul key={index} className={styles.searchResult}>
                            <li>
                                {user.firstname} {user.lastname}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className={styles.right}>
                    <time className={styles.time}>{time}</time>
                    <div className={styles.notification}>
                        <IoNotificationsOutline className={styles.icon} />
                        <span>Notification</span>
                        <span className={styles.notificationIcon}>4</span>
                    </div>
                    <div className={styles.image}>
                        <Image
                            className={styles.image}
                            src="/image/aboutImg.jpg"
                            objectFit="contain"
                            width={40}
                            height={40}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navabr;
