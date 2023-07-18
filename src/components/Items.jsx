import Item from "./Item.jsx"

export default function Items(){
    return (
        <section className="items">
            <Item
            title="Using abstract"
            icon="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
            desc="Abstract lets you manage, version, and document your designs in one place."
            link="#"
            />
            <Item
            title="Manage your account"
            icon="https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png"
            desc="Configure your account settings, such as your email, profile details, and password."
            link="#"
            />
            <Item
            title="Manage organizations, teams, and projects"
            icon="https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png"
            desc="Use Abstract organizations, teams, and projects to organize your people and your work."
            link="#"
            />
            <Item
            title="Manage billing"
            icon="https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png"
            desc="Change subscriptions and payment details."
            link="#"
            />
            <Item
            title="Authenticate to Abstract"
            icon="https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png"
            desc="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
            link="#"
            />
            <Item
            title="Abstract support"
            icon="https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png"
            desc="Get in touch with a human."
            link="#"
            />
        </section>
    )
}