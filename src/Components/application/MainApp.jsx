import './MainApp.css'
import { useBlockedList } from './useBlockedList';
import AddDomains from '../add-domain-section/AddDomains';
import SiteLists from '../display-blacklist-sites/SiteLists';
import ToggelExtension from '../extension-switch/ToggelExtension';
import useToggleState from '../../shared/hooks/useToggleState';
import useInput from '../../shared/hooks/useInput';
function MainApp() {

  const { blockedLists, RemoveBlockUrl, AddBlockUrl, inputUrl, handleInput } = useBlockedList();
  const { checked, HandleToggle } = useToggleState()


  return (
    <>
      <ToggelExtension HandleToggle={HandleToggle} checked={checked} />
      <div className="card">
        <AddDomains AddBlockUrl={AddBlockUrl} handleInput={handleInput} />
        <SiteLists RemoveBlockUrl={RemoveBlockUrl} blockedLists={blockedLists} />
      </div >
    </>
  )
}

export default MainApp
