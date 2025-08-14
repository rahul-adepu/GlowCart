import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFE9E6" />

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
      <View style={styles.sectionCard}>
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

      {/* Bottom tab bar (visual only) */}
      <View style={styles.tabBar}>
        <Tab icon="🏠" label="Home" />
        <Tab icon="🏷️" label="Offers" />
        <Tab icon="🤍" label="Wishlist" />
        <Tab icon="👤" label="Profile" active />
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
    paddingTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  headerUnderline: {
    height: 3,
    width: 68,
    backgroundColor: '#2F80ED',
    marginTop: 6,
    borderRadius: 2,
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  menuDots: {
    fontSize: 18,
    letterSpacing: 2,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    marginRight: 14,
  },
  avatarImg: { width: '100%', height: '100%' },
  userInfo: { flex: 1 },
  userName: { fontSize: 20, fontWeight: '700', color: '#111111', marginBottom: 4 },
  userEmail: { fontSize: 14, color: '#6F6F6F' },
  editButton: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  editIcon: { fontSize: 18, color: '#7D7D7D' },

  sectionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: 72,
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
    paddingVertical: 14,
  },
  leftIcon: { fontSize: 20, width: 28, color: '#6F6F6F' },
  center: { flex: 1 },
  title: { fontSize: 18, color: '#111111' },
  subtitle: { fontSize: 13, color: '#8B8B8B', marginTop: 4 },
  chevron: { fontSize: 24, color: '#BDBDBD' },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EFEFEF',
  },
});

const tabStyles = StyleSheet.create({
  item: { alignItems: 'center' },
  icon: { fontSize: 22, color: '#9E9E9E' },
  label: { fontSize: 12, color: '#9E9E9E', marginTop: 4 },
  iconActive: { color: '#C2185B' },
  labelActive: { color: '#C2185B' },
});
