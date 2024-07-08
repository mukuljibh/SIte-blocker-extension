import './MainApp.css'
import { useSetBlockList } from './useSetBlockList';
import AddDomains from '../add-domain-section/AddDomains';
import SiteLists from '../display-blacklist-sites/SiteLists';
import ToggleExtension from '../extension-switch/ToggleExtension';
import useToggleState from '../../shared/hooks/useToggleState';
import useModifyBlockList from './useModifyBlockList';
import useInput from '../../shared/hooks/useInput';
function MainApp() {

  const { inputUrl, HandleInput } = useInput()
  const { blockedLists, setBlockLists } = useSetBlockList();
  const { checked, HandleToggle } = useToggleState()
  const { RemoveBlockUrl, AddBlockUrl } = useModifyBlockList(inputUrl, blockedLists, setBlockLists);

  return (
    <>
      <ToggleExtension HandleToggle={HandleToggle} checked={checked} />
      <div className="card">
        <AddDomains AddBlockUrl={AddBlockUrl} handleInput={HandleInput} />
        <SiteLists RemoveBlockUrl={RemoveBlockUrl} blockedLists={blockedLists} />
      </div >
    </>
  )
}

export default MainApp
