export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Category: {
        Row: {
          environment:
            | Database["public"]["Enums"]["Category_environment"]
            | null
          id: string
          name: string
        }
        Insert: {
          environment?:
            | Database["public"]["Enums"]["Category_environment"]
            | null
          id: string
          name: string
        }
        Update: {
          environment?:
            | Database["public"]["Enums"]["Category_environment"]
            | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      OrderItems: {
        Row: {
          orderId: string
          productId: string
        }
        Insert: {
          orderId: string
          productId: string
        }
        Update: {
          orderId?: string
          productId?: string
        }
        Relationships: []
      }
      Orders: {
        Row: {
          createdAt: string
          id: string
          status: Database["public"]["Enums"]["Orders_status"]
          userId: string
        }
        Insert: {
          createdAt?: string
          id: string
          status: Database["public"]["Enums"]["Orders_status"]
          userId: string
        }
        Update: {
          createdAt?: string
          id?: string
          status?: Database["public"]["Enums"]["Orders_status"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Orders_userId_fkey"
            columns: ["userId"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Product: {
        Row: {
          category: string
          categoryId: string
          description: string
          discount: number | null
          id: string
          imageUrl: string
          name: string
          onSale: boolean
          price: number
          volume: number
        }
        Insert: {
          category: string
          categoryId: string
          description: string
          discount?: number | null
          id: string
          imageUrl: string
          name: string
          onSale?: boolean
          price: number
          volume: number
        }
        Update: {
          category?: string
          categoryId?: string
          description?: string
          discount?: number | null
          id?: string
          imageUrl?: string
          name?: string
          onSale?: boolean
          price?: number
          volume?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Category_environment: "home" | "auto" | "miscellaneous"
      Orders_status: "overdue" | "pending" | "delivered" | "onRoute"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
