import React, { FC, memo } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getStyle } from "./styles";
import { UniversalButton } from "../../../../components/universalButton";
import { ICONS } from "../../../../assets/svg";

interface IProps {
}

const avatarImg = "https://fiftyflowers.com/cdn/shop/products/Chocolate_20Orange_20Flatlay_20350x350_a5f5cbd5_33729110-04b0-48dc-a430-a9b4b73b669c.jpg";

export const AvatarComponent: FC<IProps> = memo(({ }: IProps) => {
    const styles = getStyle();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: avatarImg }} style={styles.avatar} />
                <View style={styles.infoContainer}>
                    <Text numberOfLines={1} style={styles.name}>Emin Zeynalov</Text>
                    <Text numberOfLines={1} style={styles.status}>Life is not fair!</Text>
                </View>
                <TouchableOpacity style={styles.qrButton}>
                    <ICONS.Qr />
                </TouchableOpacity>
            </View>
            <UniversalButton
                containerStyle={{ backgroundColor: "transparent" }}
                item={{ leftIcon: ICONS.Avatar, title: "Avatar" }}
            />
        </View>
    );
});
