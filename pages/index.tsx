import { useEffect, useState, lazy } from "react";
import axios from "axios";
import { FaHandPointDown } from "react-icons/fa";

import { Profile } from "./api/bff";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";

const LoadableResponseDetail = lazy(
  () => import("../components/LoadableResponseDetail")
);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile>({} as Profile);
  const [response, setResponse] = useState<any>(undefined);
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);

  const apiUrlPath =
    typeof window !== "undefined"
      ? `${window.location.protocol}//${window.location.host}/api`
      : "/api";

  useEffect(() => {
    setLoading(true);
    axios.get(`${apiUrlPath}/bff`).then((res: { data: Profile }) => {
      setLoading(false);
      const resProfile: Profile = res.data as Profile;
      setProfile(resProfile);
    });
    // .catch(console.error);
  }, [apiUrlPath]);

  const handleBFFRessponse = () => {
    setResponse(profile);
  };

  const handleMessagesRessponse = () => {
    setLoadingResponse(true);
    axios
      .get(`${apiUrlPath}/messages`, {
        params: { action: "read", read: false },
      })
      .then((res: { data: any }) => {
        setLoadingResponse(false);
        setResponse(res.data);
      });
    // .catch(console.error);
  };

  const handleUserResponse = () => {
    setLoadingResponse(true);
    axios.get(`${apiUrlPath}/user`).then((res) => {
      setLoadingResponse(false);
      setResponse(res.data);
    });
    // .catch(console.error);
  };

  const handleNotificaitionResponse = () => {
    setLoadingResponse(true);
    axios
      .get(`${apiUrlPath}/notifications`, {
        params: { action: "seen", seen: false },
      })
      .then((res) => {
        setLoadingResponse(false);
        setResponse(res.data);
      });
    // .catch(console.error);
  };

  const handleFriendsResponse = () => {
    setLoadingResponse(true);
    axios.get(`${apiUrlPath}/friend-requests`).then((res) => {
      setLoadingResponse(false);
      setResponse(res.data);
    });
    // .catch(console.error);
  };

  const mainHeading =
    "Back-end for Front-end (BFF) - Micro-service Architecture, Design Pattern";
  return (
    <>
      <div className="m-auto max-w-6xl p-4">
        <div className="my-6 pt-2">
          <h1 className="font-bold text-2xl">{mainHeading}</h1>
        </div>

        <div className="p-3 sm:p-8">
          {loading ? (
            "Loading ... "
          ) : (
            <ProfileCard
              heading="Profile"
              name={profile.name}
              address={profile.address}
              location={profile.location}
              joined={profile.joined}
              last_seen={profile.last_seen}
              new_notifications={profile.new_notifications}
              new_messages={profile.new_messages}
              new_friend_requests={profile.new_friend_requests}
            />
          )}
        </div>

        <div className="mt-6 mb-2">
          <h2 className="font-bold text-large mb-6">
            BFF Micro-Services Response
          </h2>

          <div className="grid grid-rows-2 grid-flow-col gap-4 max-w-md m-auto">
            <Button onClick={handleBFFRessponse}>BFF Response</Button>
            <Button onClick={handleUserResponse}>Profile User Data</Button>
            <Button onClick={handleMessagesRessponse}>Messages Service</Button>
            <Button onClick={handleNotificaitionResponse}>
              Notifications Service
            </Button>
            <Button onClick={handleFriendsResponse}>Friends Service</Button>
          </div>

          <div className="mt-12">
            <div className="flex flex-row content-center items-center my-4">
              <h2 className="font-semibold mr-2">Response:</h2>

              <FaHandPointDown size={20} />
            </div>

            <LoadableResponseDetail
              loadingResponse={loadingResponse}
              response={response}
            />
          </div>
        </div>
      </div>
    </>
  );
}
