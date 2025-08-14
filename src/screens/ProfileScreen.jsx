import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFE9E6" />

      <View style={styles.content}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerTitle}>Profile</Text>
            <View style={styles.headerUnderline} />
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuDots}>···</Text>
          </TouchableOpacity>
        </View>

        {/* User card */}
        <View style={styles.userCard}>
          <View style={styles.avatar}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=32' }}
              style={styles.avatarImg}
            />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Olivia</Text>
            <Text style={styles.userEmail}>Oliva@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>

        {/* Section 1 */}
        <View style={styles.sectionCard}>
          <Row icon="📍" title="Address" subtitle="Manage your saved address" />
          <Divider />
          <Row icon="🧾" title="Order History" subtitle="View your past orders" />
          <Divider />
          <Row icon="🌐" title="Language" />
          <Divider />
          <Row icon="🔔" title="Notifications" />
        </View>

        {/* Section 2 */}
        <View style={[styles.sectionCard, styles.lastSection]}>
          <Row icon="🧑‍💼" title="Contact Us" />
          <Divider />
          <Row icon="❓" title="Get Help" />
          <Divider />
          <Row icon="🛡️" title="Privacy Policy" />
          <Divider />
          <Row icon="⚙️" title="Terms and Conditions" />
          <Divider />
          <Row icon="↩︎" title="Log Out" rightIconColor="#FF3B30" titleColor="#FF3B30" />
        </View>
      </View>

      {/* Bottom tab bar (visual only) */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={tabStyles.item} onPress={() => navigation.navigate('Home')}>
          <Text style={tabStyles.icon}>🏠</Text>
          <Text style={tabStyles.label}>Home</Text>
        </TouchableOpacity>
        <View style={tabStyles.item}>
          <Text style={tabStyles.icon}>🏷️</Text>
          <Text style={tabStyles.label}>Offers</Text>
        </View>
        <View style={tabStyles.item}>
          <Text style={tabStyles.icon}>🤍</Text>
          <Text style={tabStyles.label}>Wishlist</Text>
        </View>
        <View style={tabStyles.item}>
          <Text style={[tabStyles.icon, tabStyles.iconActive]}>👤</Text>
          <Text style={[tabStyles.label, tabStyles.labelActive]}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

function Row({ icon, title, subtitle, rightIconColor = '#BDBDBD', titleColor = '#111111' }) {
  return (
    <View style={rowStyles.row}>
      <Text style={rowStyles.leftIcon}>{icon}</Text>
      <View style={rowStyles.center}>
        <Text style={[rowStyles.title, { color: titleColor }]}>{title}</Text>
        {subtitle ? <Text style={rowStyles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Text style={[rowStyles.chevron, { color: rightIconColor }]}>›</Text>
    </View>
  );
}

function Divider() {
  return <View style={rowStyles.divider} />;
}

function Tab({ icon, label, active }) {
  return (
    <View style={tabStyles.item}>
      <Text style={[tabStyles.icon, active && tabStyles.iconActive]}>{icon}</Text>
      <Text style={[tabStyles.label, active && tabStyles.labelActive]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE9E6',
  },
  content: {
    paddingTop: 12,
    paddingBottom: 76, // keep last section above tab bar
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111111',
  },
  headerUnderline: {
    height: 3,
    width: 64,
    backgroundColor: '#2F80ED',
    marginTop: 6,
    borderRadius: 2,
  },
  menuButton: {
    width: 36,
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  menuDots: {
    fontSize: 16,
    letterSpacing: 2,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 12,
  },
  avatarImg: { width: '100%', height: '100%' },
  userInfo: { flex: 1 },
  userName: { fontSize: 18, fontWeight: '700', color: '#111111', marginBottom: 2 },
  userEmail: { fontSize: 13, color: '#6F6F6F' },
  editButton: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  editIcon: { fontSize: 16, color: '#7D7D7D' },

  sectionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  lastSection: {
    marginBottom: 8,
  },

  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 6,
  },
});

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftIcon: { fontSize: 18, width: 24, color: '#6F6F6F' },
  center: { flex: 1 },
  title: { fontSize: 16, color: '#111111' },
  subtitle: { fontSize: 12, color: '#8B8B8B', marginTop: 2 },
  chevron: { fontSize: 20, color: '#BDBDBD' },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EFEFEF',
  },
});

const tabStyles = StyleSheet.create({
  item: { alignItems: 'center' },
  icon: { fontSize: 20, color: '#9E9E9E' },
  label: { fontSize: 12, color: '#9E9E9E', marginTop: 2 },
  iconActive: { color: '#C2185B' },
  labelActive: { color: '#C2185B' },
});
