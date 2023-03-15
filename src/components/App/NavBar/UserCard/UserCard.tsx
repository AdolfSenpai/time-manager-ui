import EtmInput from "src/components/common/EtmInput/EtmInput";
import { useAppSelector } from "src/app/hooks";
import { getRequestResult } from "src/models/RequestState";
import EtmButton from "src/components/common/EtmButton/EtmButton";

export default function UserCard() {

    const user = useAppSelector(state => getRequestResult(state.user.request));

    return(
        <div>
            <p>{user?.name}</p>
            <EtmButton>Logout</EtmButton>
        </div>
    );
}