
import Switch from '@mui/material/Switch';
import useToggleState from '../../shared/hooks/useToggleState';

export default function ToggelExtension() {
    const { HandleToggle, checked } = useToggleState()
    return (
        <div >
            <Switch
                onChange={HandleToggle}
                checked={checked}
                defaultChecked color="warning" />
        </div>
    )
}