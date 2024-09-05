import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import UserInfo from "../Components/UserInfo";

const UserPage = () => {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const fetchUserData = async () => {
    if (!user) return;

    try {
      const resultsRef = db.collection("Results");
      const { uid } = user; // Use 'user' instead of 'auth.currentUser'
      let tempData = [];
      let tempGraphData = [];
      const snapshot = await resultsRef
        .where("userId", "==", uid)
        .orderBy("timeStamp", "desc")
        .get();
      
      snapshot.docs.forEach((doc) => {
        tempData.push({ ...doc.data() });
        tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(",")[0], doc.data().wpm]);
      });
      setData(tempData);
      setGraphData(tempGraphData.reverse());
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && user) {
      fetchUserData();
    } else if (!loading && !user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  if (loading || dataLoading) {
    return (
      <div className="center-of-screen">
        <CircularProgress size={300} />
      </div>
    );
  }

  if (!dataLoading && data.length === 0) {
    return (
      <div className="center-of-screen">
        <span>Take some tests then come back!!</span>
      </div>
    );
  }

  return (
    <div className="canvas">
      <UserInfo totalTestTaken={data.length} />
      <div className="graph">
        <Graph graphData={graphData} />
      </div>
      <TableUserData data={data} />
    </div>
  );
};

export default UserPage;
