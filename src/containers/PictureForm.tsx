import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ButtonST } from '../assets/Button.style'
import { Content } from '../assets/Common.style'
import { Form, Label, Subtitle } from '../assets/FormElements.style'
import { ImgST } from '../assets/Img.style'
import { ButtonVars, ImgVars } from '../assets/Vars'
import Saved from '../components/Saved'
import { ImageUpload } from '../helpers/ImageUpload.helper'

const PictureForm = () => {
    const [red, setRed] = useState(false)
    const user = useSelector((state: any) => state?.user.value)
    return (!red ?
        <Form onSubmit={() => setRed(true)}>
            <Subtitle>Change your profile photo</Subtitle>
            <Content>
                <ImgST url={user.avatar} width={ImgVars.large} />
                <Label onClick={e => {
                    document.getElementById('file')?.click()
                }}>
                    <input id='file' type="file" hidden name="file" onChange={(e) => ImageUpload(e.target.files)} />
                    <ButtonST pd={true} content='Upload new image' style={ButtonVars.darkorange} />
                </Label>
            </Content>
            <div style={{ "marginTop": "16px" }}>
                <ButtonST content='Submit' height='36px' width='107px' style={ButtonVars.darkorange} />
                <NavLink to={'/'}><div style={{ "display": "inline", "padding": "32px" }}>Cancel</div></NavLink>
            </div>
        </Form>
        : <Saved />
    )
}

export default PictureForm