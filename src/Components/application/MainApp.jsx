import './MainApp.css'
import { useBlockedList } from './useBlockedList';
import AddDomains from '../add-domain-section/AddDomains';
import SiteLists from '../display-blacklist-sites/SiteLists';
import ToggelExtension from '../extension-switch/ToggelExtension';
import useToggleState from '../../shared/hooks/useToggleState';
function MainApp() {

  const { blockedLists, setInputUrl, RemoveBlockUrl, AddBlockUrl } = useBlockedList();
  const { checked, HandleToggle } = useToggleState()


  return (
    <>
      <ToggelExtension HandleToggle={HandleToggle} checked={checked} />
      <div className="card">
        <AddDomains setInputUrl={setInputUrl} AddBlockUrl={AddBlockUrl} />
        <SiteLists RemoveBlockUrl={RemoveBlockUrl} blockedLists={blockedLists} />
      </div >
    </>
  )
}

export default MainApp
