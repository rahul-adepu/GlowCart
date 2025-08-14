import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, StatusBar, ActivityIndicator, Dimensions } from 'react-native';

const API_URL = 'https://dummyjson.com/products';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        if (isMounted) {
          setProducts(json.products || []);
        }
      } catch (e) {
        if (isMounted) setError('Failed to load products');
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayed = useMemo(() => {
    if (!query.trim()) return products;
    const q = query.trim().toLowerCase();
    return products.filter(p => p.title.toLowerCase().includes(q));
  }, [products, query]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail || item.images?.[0] }} style={styles.cardImage} />
      <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
      <View style={styles.cardRow}>
        <Text style={styles.cardPrice}>${item.price?.toFixed ? item.price.toFixed(2) : item.price}</Text>
        <Text style={styles.heart}>♡</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFE9E6" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>Viorra</Text>
        <View style={styles.headerActions}>
          <Text style={styles.headerIcon}>🔔</Text>
          <Text style={[styles.headerIcon, { marginLeft: 12 }]}>👜</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for all products"
            placeholderTextColor="#8E8E93"
            value={query}
            onChangeText={setQuery}
          />
        </View>
      </View>

      {/* Section Title + Filter pill (UI only) */}
      <View style={styles.sectionRow}>
        <View>
          <Text style={styles.sectionTitle}>Best Products</Text>
          <Text style={styles.sectionSubtitle}>{displayed.length} products</Text>
        </View>
        <TouchableOpacity style={styles.filterPill}>
          <Text style={styles.filterText}>Apply Filter</Text>
          <Text style={styles.filterArrow}>▾</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      {loading ? (
        <ActivityIndicator style={{ marginTop: 40 }} color="#C2185B" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContent}
          data={displayed}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Bottom tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={tabStyles.item}>
          <Text style={[tabStyles.icon, tabStyles.iconActive]}>🏠</Text>
          <Text style={[tabStyles.label, tabStyles.labelActive]}>Home</Text>
        </TouchableOpacity>
        <View style={tabStyles.item}>
          <Text style={tabStyles.icon}>🏷️</Text>
          <Text style={tabStyles.label}>Offers</Text>
        </View>
        <View style={tabStyles.item}>
          <Text style={tabStyles.icon}>🤍</Text>
          <Text style={tabStyles.label}>Wishlist</Text>
        </View>
        <TouchableOpacity style={tabStyles.item} onPress={() => navigation.navigate('Profile')}>
          <Text style={tabStyles.icon}>👤</Text>
          <Text style={tabStyles.label}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const GAP = 16;
const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = (SCREEN_WIDTH - GAP * 3) / 2; // two columns with outer padding and gap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE9E6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: GAP,
    paddingTop: 14,
  },
  brand: {
    fontFamily: 'serif',
    fontSize: 28,
    color: '#B84953',
    fontWeight: '600',
  },
  headerActions: { flexDirection: 'row', alignItems: 'center' },
  headerIcon: { fontSize: 18 },

  searchRow: { paddingHorizontal: GAP, paddingVertical: 12 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 14,
    height: 44,
  },
  searchIcon: { fontSize: 16, color: '#8E8E93' },
  searchInput: { flex: 1, marginLeft: 8, color: '#111' },

  sectionRow: {
    paddingHorizontal: GAP,
    paddingTop: 8,
    paddingBottom: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 26, fontWeight: '700', color: '#111111' },
  sectionSubtitle: { fontSize: 14, color: '#7E7E7E', marginTop: 4 },

  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    height: 36,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  filterText: { color: '#111', fontSize: 14, marginRight: 6 },
  filterArrow: { fontSize: 14, color: '#6F6F6F' },

  listContent: { paddingHorizontal: GAP, paddingBottom: 80, paddingTop: 10 },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: GAP,
    marginBottom: GAP,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: CARD_WIDTH - 20,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#F5F5F5',
  },
  cardTitle: { fontSize: 16, color: '#111111', marginTop: 8 },
  cardRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 },
  cardPrice: { fontSize: 16, fontWeight: '600', color: '#111111' },
  heart: { fontSize: 18, color: '#9E9E9E' },

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

const tabStyles = StyleSheet.create({
  item: { alignItems: 'center' },
  icon: { fontSize: 22, color: '#9E9E9E' },
  label: { fontSize: 12, color: '#9E9E9E', marginTop: 4 },
  iconActive: { color: '#C2185B' },
  labelActive: { color: '#C2185B' },
});
