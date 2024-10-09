import { faCode, faVial, faSearch, faUniversalAccess, faGlobe, faCommentDollar } from "@fortawesome/free-solid-svg-icons";

export default function getIcon(serviceType: string) {
  switch (serviceType.toLowerCase()) {
    case "development":
      return faCode;
    case "testing":
      return faVial;
    case "seo":
      return faSearch;
    case "accessibility":
      return faUniversalAccess;
    case "websites":
      return faGlobe;
    case "marketing":
      return faCommentDollar;
    default:
      return faCode;
  }
}
