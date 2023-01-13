import dayjs from 'dayjs';
import {FaUserCircle} from 'react-icons/fa';

interface ProfileCardProps {
  heading: string;
  name: string;
  address: string | number;
  joined: Date;
  last_seen: Date;
  new_notifications: number;
  new_messages: number;
  new_friend_requests: number;
  location: string;
}

export default function ProfileCard({
  heading,
  name,
  location,
  joined,
  last_seen,
  new_notifications,
  new_messages,
  new_friend_requests,
}: ProfileCardProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 rounded-xl shadow-sm py-4">
        <FaUserCircle size={246} aria-hidden="true" />

        <div className="space-y-1">
          <p className="uppercase font-semibold text-sm">{heading}</p>
          <p className="font-bold text-4xl">{name}</p>
          <p className="">Location: {location}</p>
          <p>Joined: {dayjs(joined).format('YYYY-MM-DD')}</p>
          <p>Last Seen: {dayjs(last_seen).format('YYYY-MM-DD')}</p>
          <p>Notifications: {new_notifications}</p>
          <p>Messages: {new_messages}</p>
          <p>New Friend Requests: {new_friend_requests}</p>
        </div>
      </div>

      <div className="mt-4">
        <p>
          <span className="font-bold">User Bio</span>: Aenean et tortor at
          risus. Risus nullam eget felis eget nunc lobortis mattis aliquam
          faucibus. Amet mattis vulputate enim nulla aliquet porttitor lacus
          luctus. In metus vulputate eu scelerisque felis imperdiet. Vulputate
          mi sit amet mauris commodo quis. Vestibulum rhoncus est pellentesque
          elit ullamcorper dignissim cras tincidunt lobortis. Habitasse platea
          dictumst quisque sagittis purus sit amet volutpat consequat.
        </p>
      </div>
    </>
  );
}
