import React from "react";
import { useState,useEffect } from "react";


export const SocialDataViewer = () => {
  const [data, setData] = useState({});
  const [followingUsernames, setFollowingUsernames] = useState([]);
  const [followersUsernames, setFollowersUsernames] = useState([]);
  const [notFollowingBack, setNotFollowingBack] = useState([]);
  const [recentlyUnfollowed, setRecentlyUnfollowed] = useState([]);
  const [younotFollowing, setyouNotFollowing] = useState([]);
  const [blockedUsernames, setBlockedUsernames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const notFB = followingUsernames.filter(f => !followersUsernames.includes(f));
    setNotFollowingBack(notFB);
  }, [followingUsernames, followersUsernames]);
  useEffect(() => {
    const notFB = followersUsernames.filter(f => !followingUsernames.includes(f));
    setyouNotFollowing(notFB);
  }, [followingUsernames, followersUsernames]);

  const handleFiles = (event) => {
    setError(null);
    const files = event.target.files;
    if (files.length === 0) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          const fileName = file.name.replace('.json', '');
          setData(prev => ({ ...prev, [fileName]: jsonData }));

          if (fileName === 'following') {
            const usernames = jsonData.relationships_following?.map(item => item.string_list_data[0].value) || [];
            setFollowingUsernames(usernames);
          } else if (fileName === 'followers_1') {
            const usernames = jsonData.map(item => item.string_list_data[0].value) || [];
            setFollowersUsernames(usernames);
          } else if (fileName === 'blocked_profiles') {
            const usernames = jsonData.relationships_blocked_users?.map(item => item.title) || [];
            setBlockedUsernames(usernames);
          } else if (fileName === 'recently_unfollowed_profile') {
            const usernames = jsonData.relationships_blocked_users?.map(item => item.title) || [];
            setRecentlyUnfollowed(usernames);
          }
        } catch (error) {
          setError(`Error parsing ${file.name}: Invalid JSON format`);
          console.error(`Error parsing ${file.name}:`, error);
        }
      };
      reader.readAsText(file);
    });
  };

  const ListDisplay = ({ title, items }) => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {items.length > 0 ? (
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl flex flex-col items-center gap-3 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Instagram Data Viewer</h1>
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Upload JSON Files:</label>
        <input
          type="file"
          multiple
          accept=".json"
          onChange={handleFiles}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:gap-24">
      <ListDisplay title="Following" items={followingUsernames} />
      <ListDisplay title="Followers" items={followersUsernames} />
      <ListDisplay title="Users who are Not Following Back" items={notFollowingBack} />
      <ListDisplay title="Users who Follows you but you don't" items={younotFollowing} />
      <ListDisplay title="Blocked Users" items={blockedUsernames} />
    </div>
    </div>
  );
};