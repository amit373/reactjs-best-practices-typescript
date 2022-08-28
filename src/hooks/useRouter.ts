import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Location,
  Params,
  NavigateFunction,
} from "react-router-dom";
import queryString from "query-string";

export function useRouter() {
  const params: Readonly<Params<string>> = useParams();
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  return useMemo(
    () => ({
      navigate,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      location,
    }),
    [navigate, location, params]
  );
}
